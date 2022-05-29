import Image from "next/image";

interface Props {
  username: string;
  avatarUrl: string;
}

const UserInformationSection: React.FunctionComponent<Props> = ({
  username,
  avatarUrl,
}) => (
  <div className="flex items-center max-h-min">
    <Image src={avatarUrl} alt="User avatar" width={32} height={32} />
    <p aria-label="Username" className="text-[#eaeaea] font-bold ml-2">
      {username}
    </p>
  </div>
);

export default UserInformationSection;
