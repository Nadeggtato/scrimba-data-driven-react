import Entry from "@/components/Entry";
import Header from "@/components/Header";
import entries from "@/data/entries";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="container">
        <Entry entries={entries}/>
      </main>
    </>
  );
}
