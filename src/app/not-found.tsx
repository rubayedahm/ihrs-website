import { PageHero } from "@/components/PageHero";
import { Accent, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title={
          <>
            This page has <Accent>moved</Accent> or doesn’t exist
          </>
        }
        intro="Try the homepage, or explore our events and journal."
      />
      <div className="container-x flex gap-3 py-16">
        <Button href="/">Back to home</Button>
        <Button href="/journal/" variant="ghost">
          Read the journal
        </Button>
      </div>
    </>
  );
}
