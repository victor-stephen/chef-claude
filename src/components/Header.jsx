import logo from "../images/chef-claude-icon.png";
export default function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="chef-claude" />
      <span className="brand-name">Chef Claude</span>
    </header>
  );
}
