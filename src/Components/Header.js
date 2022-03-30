import Logo from "../Icons/header_icon.png";

export default function Header() {
    return (
        <header className="App-header">
            <img src={Logo} alt="" />
            <h1>my travel journal.</h1>
        </header>
    );
}
