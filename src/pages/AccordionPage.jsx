import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "akls;fj",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.",
    },
    {
      id: "qwopeur",
      label: "Can I use JavaScript on a project?",
      content: "You can use JavaScript on any project you want.",
    },
    {
      id: "zlxvj",
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any project you want.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
