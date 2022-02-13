interface Props {
  className?: string;
}

const Icon: React.FC<Props> = ({ className }) => (
  <svg
    width="4"
    height="4"
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="2" cy="2" r="2" fill="#8F97AB" />
  </svg>
);

export default Icon;
