export function VirtualPrivateNetwork() {
    return <>
        <h1>Virtual Private Network</h1>
        <p>A virtual private network, or VPN, is an encrypted connection over the internet from a device to a network. The encrypted connection helps ensure that sensitive data is safely transmitted. It prevents unauthorised people from eavesdropping on the traffic and allows the user to conduct work remotely.</p>
        <p>It operates under some predefined standards that can encrypt your connection in different ways, including but not limited to</p>
        <ul>
            <li>WireGuard - This VPN Protocol is an extremely fast protocol designed to be simpler, and more performant than other types. It uses a strong Curve22519 key exchange, ChaCha20 encryption and Poly1305 for authentication.</li>
            <li>Socket Secure Version 5 Protocol - This is a secure network protocol that routes internet traffic through a proxy server—hiding your IP address. It supports both TCP and UDP. It is used for bypassing regional content blocks by masking your location—it accesses the open internet from countries with heavy content filters. This proxy is unencrypted, but obfuscation layers like Shadowsocks bypasses Deep Packet Inspection by making traffic look like normal unreadable garbage that Deep Packet Inspection cannot understand.</li>
        </ul>
    </>
}