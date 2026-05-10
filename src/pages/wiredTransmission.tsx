import { NavLink } from "react-router-dom";

export function WiredTransmission() {
    return <>
        <h1>Wired Transmission</h1>
        <p>Wired transmission uses forms of wired communication to transmit data between devices</p>
        <p>It is a form of communication separate from Wireless Transmission.</p>
        <h2>Ethernet Cable & UTP</h2>
        <p>
            An ethernet cable is a physical cable that can transmit data to networks
        </p>
        <p>
            UTP is a form of ethernet cable that has four twisted copper wires without an outer casing to protect it
        </p>
        <p>
            Ethernet cables are used to physically connect devices (such as computers, laptops, smart TVs, gaming consoles, mini PCs, Network Attached Storage Devices, desktop towers, workstation laptops, single-board computers, streaming boxes, AV receivers, Network Video Recorders, smart hubs, smart fridges, network printers/scanners, security basestations and specific smart washing machines for example) to provide a stable, high speed wired connection for data transfer between computers, routers, switches, and devices in a <NavLink to="/definitions/hardware">LAN</NavLink>.
        </p>
        <p>An Unshielded Twisted Paircable is a type of copper cable used in networking to transmit data. UTP lacks metallic shielding, allowing a small diameter which in turn makes it more flexible, and easier to install.</p>
        <p>
            Twisting of wires increases the cable's immunity to electric noise. There are different categories for UTP that allow for various speeds. Cat5e supports Gigabit internet, and Cat6a supports 10 Gigabit internet.
        </p>
        <div className="flexSide">
        <img className="behaveImage" src="https://www.firewall.cx/images/stories/cabling-utp-categories.png" alt="A table listing categories of UTP"/>
        <img className="behaveImage" src="https://stl.tech/wp-content/uploads/2022/05/shutterstock_561553240.jpg" alt="A cable with an opening cutout and 4 twisted wires exiting from the opening. This is a UTP cable." width="700px" height="466px" />
        </div>
        <h2>Copper Wires</h2>
        <p>
            A copper wire is a thin thread made of copper that allows information to pass through it by converting data into elecetric signals that are transmitted as encoded sequences of voltage pulses throughout the conductor to communicate to another electrical component.
        </p>
        <p>
            Copper wires are used heavily because copper is an exceptionally efficient conductor, and a lot more affordable than silver (though aluminium is cheaper). Copper has very low resistivity, meaning it demonstrates little resistance to the flow of electrical current.
        </p>
        <p>
            When other metals corrode, they form a highly resistant coating. Copper's natural oxidation layer is less resisting to conductivity.
        </p>
        <p>
            In aviation, copper wires aren't used because they are dense and heavy. They might use lighter materials — for instance, power lines use aluminium instead. Copper wires can pick up electromagnetic interference that can corrupt data signals. Without boosters, copper loses signal strength significantly faster than fiber optic cables. Because of this, copper wires are commonly used in home wiring and electronics — while aluminium is used in long-distance telecommunications.
        </p>
    </>
}