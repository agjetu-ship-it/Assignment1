import { NavLink } from "react-router-dom";

export function Binary() {
    return <>
        <h1>What is Binary</h1>
        <p>
            In the movies, you hear it as this magical computing language that people modify directly to gain access to the mainframe. You look at binary at the first time and see "10101010101" (not an accurate representation), you say WOW!
        </p>
        <p>
            But, binary is actually just another name for base-2. Binary uses two states [ON, OFF] to store data.
            People usually use the numbers 0, and 1 to represent the states as text - 0 meaning off, and 1 meaning on.
        </p>
        <p>
            A misconception people usually make is that binary can be directly decoded to text.
            This is not the case, binary is simply a number format. Instead, the people are referring probably referring to text lookup tables like ASCII that allows you to convert a number to a character. Chain this, and you can make a sentence just from numbers!
            
            Note: This article is referring to Extended ASCII — A version later made to use the full 8 bits, to allow things like special symbols.

            The original ASCII only had 7 bits (128 characters).
        </p>
        <NavLink to="/blogs/ascii">
        click here to know about ASCII
        </NavLink>
        <p>In a binary number, each bit is twice the value of the bit on the right of this bit. The first bit on the very right has a value of 1.</p>
        <table className="scientificTable">
            <tr>
                <th>Bit 0</th>
                <th>Bit 1</th>
                <th>Bit 2</th>
                <th>Bit 3</th>
                <th>Bit 4</th>
                <th>Bit 5</th>
                <th>Bit 6</th>
                <th>Bit 7 💀</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>128</td>
                <td>64</td>
                <td>32</td>
                <td>16</td>
                <td>8</td>
                <td>4</td>
                <td>2</td>
                <td>1</td>
                <td>255</td>
            </tr>
        </table>
        <p>
            When a bit is flipped on, that bit's value gets added to the total.
            Let's take a look at an example.
        </p>
        <code>00100101</code>
        <p>
            Technically, a binary number doesn't HAVE to be 8 digits to be a valid number.
            But ASCII was created to represent a character in a single
        </p>

    </>;
}