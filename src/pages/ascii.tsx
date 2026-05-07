import { ASCIITable } from "../asciiTable.js";

export function ASCII() {
    return <>
        <h1>The Encoding System of ASCII</h1>
        <p>ASCII stands for American Standard Code for Information Interchange.</p>
        <p>ASCII is a character lookup table that has 128 characters.</p>
        <p>ASCII was created to standardise how computers represent text.</p>
        <strong>Full ASCII Table</strong>
        <ASCIITable/>
    </>
}