import Git from '../assets/github-mark.png'

function LogoGitHub() {
  return (
    <a href="https://github.com/alexiacabanel" target="_blank" rel="noopener noreferrer">
      <img
        src={ Git }
        alt="GitHub Logo"
        width="40"
        height="40"
      />
    </a>
  );
}

export default LogoGitHub;
