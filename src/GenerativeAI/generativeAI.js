import {GoogleGenerativeAI} from "@google/generative-ai";

const helpButton = document.querySelector("#help");
const helpBody = document.querySelector("#help-body");

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"})

const result = await model.generateContent("Write me a 2-line javascript poem.")

console.log(result.response)

helpButton.addEventListener("click", async () => {
  helpBody.textContent = "Loading...";
  //
});
