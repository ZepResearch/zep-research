import  { getPocketBaseClient } from "./pocketbase.js";

let pb = getPocketBaseClient();
/**
 * Fetch a paginated list of journals
 */
export async function getJournalsPageinated(page = 1, pageSize = 50) {
  const resultList = await pb.collection('Journals').getList(page, pageSize, {
    sort: '-created',
  });
  return resultList;
}

/**
 * Fetch all journals at once
 */
export async function getAllJournals() {
  const records = await pb.collection('Journals').getFullList({
    sort: '-created',
  });
  return records ;
}

/**
 * Fetch a single journal by ID
 */
export async function getJournalById(id) {
  const record = await pb.collection('Journals').getOne(id, {
    expand: 'relField1,relField2.subRelField',
  });
  return record ;
}

/**
 * Fetch a journal by a specific field (e.g., ISSN code)
 */
export async function getJournalByField(fieldName, value) {
  const record = await pb.collection('Journals').getFirstListItem(`${fieldName}="${value}"`, {
    expand: 'relField1,relField2.subRelField',
  });
  return record ;
}

/**
 * Search journals with custom filter
 */
export async function searchJournals(filter, page = 1, pageSize = 50) {
  const resultList = await pb.collection('Journals').getList(page, pageSize, {
    filter,
    sort: '-created',
  });
  return resultList;
}

/**
 * Create a new journal
 */
export async function createJournal(data) {
  const record = await pb.collection('Journals').create(data);
  return record ;
}

/**
 * Update an existing journal
 */
export async function updateJournal(id) {
  const record = await pb.collection('Journals').update(id, data);
  return record ;
}

/**
 * Delete a journal
 */
export async function deleteJournal(id) {
  await pb.collection('Journals').delete(id);
}
