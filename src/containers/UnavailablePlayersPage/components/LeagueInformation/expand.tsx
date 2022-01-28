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
      d="M9.875 0.99999L5.995 4.87999L2.115 0.99999C1.92817 0.812737 1.67452 0.707504 1.41 0.707504C1.14548 0.707504 0.89183 0.812737 0.704998 0.99999C0.314998 1.38999 0.314998 2.01999 0.704998 2.40999L5.295 6.99999C5.685 7.38999 6.315 7.38999 6.705 6.99999L11.295 2.40999C11.685 2.01999 11.685 1.38999 11.295 0.99999C10.905 0.61999 10.265 0.60999 9.875 0.99999Z"
      fill="#EAEAEA"
    />
  </svg>
);

export default Hide;
