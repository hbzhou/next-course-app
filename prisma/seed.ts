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
      {
        id: "645dbb97af18c2990353bfce",
        name: "Jeremy Zhou",
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
      {
        id: "645da32faf18c2990353bfbe",
        title: "JAVA",
        description:
          "Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.\n\nWhile most modern Java applications combine the Java runtime and application together, there are still many applications and even some websites that will not function unless you have a desktop Java installed. Java.com, this website, is intended for consumers who may still require Java for their desktop applications – specifically applications targeting Java 8. Developers as well as users that would like to learn Java programming should visit the dev.java website instead and business users should visit oracle.com/java for more information.",
        creationDate: "2023-05-12",
        duration: 200,
        authors: ["642032431f6f1427cb0a7e29"],
      },
      {
        id: "645da552af18c2990353bfc1",
        title: "Python",
        description:
          "Python's documentation, tutorials, and guides are constantly evolving.\n\nGet started here, or scroll down for documentation broken out by type and subject.",
        creationDate: "2023-05-12",
        duration: 200,
        authors: ["645da2efaf18c2990353bfbb", "642032431f6f1427cb0a7e29"],
      },
      {
        id: "645da58eaf18c2990353bfc2",
        title: "Kotlin",
        description:
          "Kotlin is a modern but already mature programming language aimed to make developers happier. It's concise, safe, interoperable with Java and other languages, and provides many ways to reuse code between multiple platforms for productive programming.",
        creationDate: "2023-05-12",
        duration: 300,
        authors: ["642032431f6f1427cb0a7e2a"],
      },
      {
        id: "645da5ceaf18c2990353bfc3",
        title: "Ruby",
        description:
          "Ruby is a language of careful balance. Its creator, Yukihiro “Matz” Matsumoto, blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a new language that balanced functional programming with imperative programming.",
        creationDate: "2023-05-12",
        duration: 200,
        authors: ["642032431f6f1427cb0a7e2a"],
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
