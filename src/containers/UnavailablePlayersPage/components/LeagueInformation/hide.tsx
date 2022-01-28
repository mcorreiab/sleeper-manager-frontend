interface Props {
  className?: string;
}

const Hide: React.FC<Props> = ({ className }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M5.29501 1L0.705006 5.59C0.315006 5.98 0.315006 6.61 0.705006 7C1.09501 7.39 1.72501 7.39 2.11501 7L6.00501 3.12L9.88501 7C10.275 7.39 10.905 7.39 11.295 7C11.685 6.61 11.685 5.98 11.295 5.59L6.70501 1C6.32501 0.610004 5.68501 0.610004 5.29501 1Z"
      fill="#EAEAEA"
    />
  </svg>
);

export default Hide;
