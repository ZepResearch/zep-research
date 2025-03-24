import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heading } from "./ui/text";

function Why() {
  return (
    (<div className="w-full py-12 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className={'font-mono'}>We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <Heading>
              Why Choose Zep Research
              </Heading>
              <p
                className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
               through our comprehensive suite of services. Our expertise in organizing Conferences & Webinars ensures impactful events that foster collaboration and innovation. We offer diverse Journals & Publications to showcase your research and enhance academic visibility.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4 drop-shadow-sm" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 bg-gradient-to-tr from-cyan-400 to-blue-500">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 ">
            <div className="bg-muted rounded-md aspect-video rounded-3x">
          <img src="https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-3xl"
          alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

export { Why };
