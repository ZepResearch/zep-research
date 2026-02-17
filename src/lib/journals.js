import { getPocketBaseClient } from "./pocketbase.js";

let pb = getPocketBaseClient();

export async function getJournalsPageinated(page = 1, pageSize = 50) {
  const resultList = await pb.collection('Journals').getList(page, pageSize, {
    sort: '-created',
    cache: 'no-store',
  });
  return resultList;
}

export async function getAllJournals() {
  const records = await pb.collection('Journals').getFullList({
    sort: '-created',
    cache: 'no-store',
  });
  return records;
}

// ✅ NEW: Returns journals grouped by indexType
export async function getGroupedJournals() {
  const records = await pb.collection('Journals').getFullList({
    sort: '-created',
    cache: 'no-store',
  });

  const grouped = {
    Scopus: [],
    GoogleScholar: [],
    ABDC: [],
  };

  records.forEach((journal) => {
    const type = journal.indexType;
    if (type === "ABDC") {
      grouped["ABDC"].push(journal);
    } else if (type === "GoogleScholar") {
      grouped["GoogleScholar"].push(journal);
    } else {
      grouped["Scopus"].push(journal);
    }
  });

  return grouped;
}

export async function getJournalById(id) {
  const record = await pb.collection('Journals').getOne(id, {
    expand: 'relField1,relField2.subRelField',
    cache: 'no-store',
  });
  return record;
}

export async function getJournalByField(fieldName, value) {
  const record = await pb.collection('Journals').getFirstListItem(`${fieldName}="${value}"`, {
    expand: 'relField1,relField2.subRelField',
    cache: 'no-store',
  });
  return record;
}

export async function searchJournals(filter, page = 1, pageSize = 50) {
  const resultList = await pb.collection('Journals').getList(page, pageSize, {
    filter,
    sort: '-created',
    cache: 'no-store',
  });
  return resultList;
}

export async function createJournal(data) {
  const record = await pb.collection('Journals').create(data);
  return record;
}

export async function updateJournal(id, data) {
  const record = await pb.collection('Journals').update(id, data);
  return record;
}

export async function deleteJournal(id) {
  await pb.collection('Journals').delete(id);
}