import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const authors = await prisma.author.createMany({
    data: [
      {
        id: "642032431f6f1427cb0a7e27",
        name: "Vasiliy Dobkin",
      },
      {
        id: "642032431f6f1427cb0a7e28",
        name: "Nicolas Kim",
      },
      {
        id: "642032431f6f1427cb0a7e29",
        name: "Anna Sidorenko",
      },
      {
        id: "642032431f6f1427cb0a7e2a",
        name: "Valentina Larina",
      },
    ],
  });
  const courses = await prisma.course.createMany({
    data: [
      {
        id: "64203360aeb001bfd24a582d",
        title: "JavaScript",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                            nchanged.`,
        creationDate: "08/03/2021",
        duration: 160,
        authors: ["642032431f6f1427cb0a7e27", "642032431f6f1427cb0a7e28"],
      },
      {
        id: "64203360aeb001bfd24a582e",
        title: "Angular",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.`,
        creationDate: "10/11/2020",
        duration: 210,
        authors: ["642032431f6f1427cb0a7e29", "642032431f6f1427cb0a7e2a"],
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
