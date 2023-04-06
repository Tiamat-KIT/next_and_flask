import Example from "./ExampleComponent";
export default {
    component: Example,
    title: "Example"
}

const template = (args:string) => {Example({text:args})};

export const Default = template.bind("")
Default.arguments = {
    text: "default"
}