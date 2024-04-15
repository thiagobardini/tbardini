// node --version # Should be >= 18
// npm install @google/generative-ai

import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 8192,
};

export const safetySettings = [
  // {
  //   category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //   threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
  // {
  //   category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  //   threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
  // {
  //   category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  //   threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
  // {
  //   category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  //   threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // },
];

export const parts = [
  { text: "What is Thiago Bardini's current role and what does it entail?" },
  {
    text: "Thiago is a Frontend Developer and QA Automation Engineer at TransPerfect. He focuses on front-end development for the OneLink JS website localization technology platform and performs end-to-end front-end UI QA tests using Playwright, ensuring product quality. He also collaborates with the development team on code quality and bug reporting using tools like Jira, Bitbucket, and Confluence.",
  },
  { text: "What are Thiago's main technical proficiencies?" },
  {
    text: "Thiago is proficient in JavaScript, TypeScript, React, modern CSS libraries, and Playwright. He is also skilled in frameworks and libraries such as Next.js, Express.js, Vue, Redux, Redux Toolkit, RTK Query, Material-UI, SASS, Tailwind, Ant Design, as well as databases like Firebase, MongoDB, SQL and AI API's.",
  },
  { text: "How can someone get in touch with Thiago for professional inquiries?" },
  {
    text: "Thiago can be contacted through his mobile number at 978-648-7075, via email at thiagobardini@icloud.com, or through LinkedIn at linkedin.com/in/thiagobardini. His portfolio can be viewed at thiagobardini.com.",
  },
  { text: "What is Thiago's educational background?" },
  {
    text: "Thiago has an Associate of Science in Information Technology from Bunker Hill Community College and a Bachelor of Science in International Relations from Universidade do Sul de Santa Catarina, Brazil.",
  },
  { text: "Can you tell us about Thiago's previous experience before joining TransPerfect?" },
  {
    text: "Before joining TransPerfect, Thiago completed a Software Engineering Immersive Program at General Assembly, where he developed full-stack applications and RESTful APIs. He has also worked as a Salesforce Administrator and Commercial Analyst at Louisiana-Pacific Corporation, where he deployed and customized the Salesforce CRM platform.",
  },
  { text: "Is Thiago involved in any community or civic technology projects?" },
  { text: "Yes, Thiago is actively involved as a Frontend Developer with Code for Boston, where he contributes to impactful civic tech projects such as bostonhpa.org." },
  { text: "Can you tell us about Thiago's previous experience before joining TransPerfect?" },
  {
    text: "Before joining TransPerfect, Thiago completed a Software Engineering Immersive Program at General Assembly, where he developed full-stack applications and RESTful APIs. He has also worked as a Salesforce Administrator and Commercial Analyst at Louisiana-Pacific Corporation, where he deployed and customized the Salesforce CRM platform.",
  },
  { text: "Is Thiago involved in any community or civic technology projects?" },
  { text: "Yes, Thiago is actively involved as a Frontend Developer with Code for Boston, where he contributes to impactful civic tech projects such as bostonhpa.org." },
  { text: "What languages does Thiago speak?" },
  { text: "Thiago is natively bilingual in Portuguese and has full professional proficiency in English. He also has limited working proficiency in Spanish." },
  { text: "Has Thiago received any honors or awards?" },
  { text: "Yes, Thiago is a member of the Phi Theta Kappa Honor Society." },
  { text: "What are Thiago's career objectives?" },
  {
    text: "Thiago aims to grow in software development and testing in innovative environments that value and nurture integrity, intelligence, and innovation. He is committed to personal and professional growth and to contributing to pioneering projects and creative technological solutions.",
  },
  { text: "What is Thiago's approach to software engineering?" },
  {
    text: "Thiago is dedicated to developing cutting-edge, responsive websites with a keen eye for creative design and usability. He specializes in fine-tuning user interfaces and user experiences, underscored by a solid foundation in comprehensive UI QA testing.",
  },
  { text: "What is Thiago's approach to QA automation?" },
  { text: "Thiago performs end-to-end front-end UI QA tests using Playwright, collaborates on code quality, and reports bugs using tools like Jira and Confluence." },
  { text: "How does Thiago's work benefit website localization at TransPerfect?" },
  { text: "Thiago’s work on the OneLink JS platform helps streamline the localization process, making websites more accessible to a global audience." },
  { text: "Which front-end development technologies does Thiago prefer?" },
  { text: "Thiago prefers technologies such as ES6, React, Redux, Ant Design, and CSS for front-end development." },
  { text: "How does Thiago ensure the quality of UI QA tests?" },
  { text: "By performing comprehensive end-to-end tests and leveraging his expertise with Playwright to simulate user interactions and identify issues." },
  { text: "How does Thiago stay up-to-date with development technologies?" },
  { text: "Thiago continuously strives to master new tools and methodologies through professional development and active project work." },
  { text: "How can one collaborate with Thiago on projects?" },
  {
    text: "Interested parties can reach out to Thiago via email (thiagobardini@icloud.com), phone (+1 978-648-7075), or LinkedIn (https://www.linkedin.com/in/thiagobardini/) for freelance work and collaborative opportunities.",
  },
  { text: "What was Thiago's role at Louisiana-Pacific Corporation?" },
  { text: "Thiago served as a Salesforce Administrator and Commercial Analyst, customizing CRM platforms and training staff on best practices." },
  { text: "How has education influenced Thiago's career in software engineering?" },
  { text: "Thiago's academic background in Information Technology and International Relations, combined with his certifications, have laid a strong foundation for his career." },
  { text: "How does Thiago utilize CI/CD in his workflow?" },
  { text: "Thiago incorporates Continuous Integration and Continuous Delivery to streamline development processes and enhance collaboration." },
  { text: "How is Thiago Bardini integrating AI into his applications?" },
  {
    text: "Thiago is integrating advanced AI functionalities into his applications by leveraging APIs such as Gemini and OpenAI's Llama. This integration allows for more intelligent and responsive features, enhancing user experience and offering cutting-edge solutions.",
  },
  { text: "What strategies does Thiago employ to stay ahead in the tech industry?" },
  { text: "Thiago prioritizes continuous learning, keeps abreast of the latest industry trends, and adapts quickly to new technologies and methodologies." },
  { text: "What are Thiago Bardini's career development goals?" },
  { text: "Thiago aims to grow in innovative software development environments and is committed to lifelong learning and professional growth." },
  { text: "How does Thiago approach problem-solving in development?" },
  { text: "Thiago employs a mix of technical knowledge, creativity, and design thinking to tackle complex software engineering problems." },
  { text: "What benefits does the integration of APIs like Gemini and OpenAI Llama bring to Thiago's projects?" },
  {
    text: "The integration of APIs like Gemini and OpenAI Llama into Thiago's projects provides a range of benefits, including the ability to process natural language, understand user intent more accurately, and automate complex tasks. This enhances the overall efficiency of the applications and provides users with more intuitive and interactive experiences.",
  },
  { text: "When did Thiago Bardini begin his career in software development, and what is his experience so far?" },
  {
    text: "Thiago Bardini embarked on his career in the software development field in 2022. With two years of experience in this dynamic industry, he has honed his skills in various technologies and contributed to numerous projects. Prior to his transition into software development, Thiago also accumulated two years of valuable experience as a Salesforce Administrator, where he specialized in CRM platform customization and training.",
  }
];
