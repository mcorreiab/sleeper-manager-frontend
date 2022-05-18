import Image from "next/image";

interface Props {
  username: string;
  avatarUrl: string;
}

const UserInformationSection: React.FunctionComponent<Props> = ({
  username,
  avatarUrl,
}) => (
  <div className="flex items-center">
    <div className="w-8 mr-2 h-8">
      <Image src={avatarUrl} alt="User avatar" width={32} height={32} />
    </div>
    <p aria-label="Username" className="text-[#eaeaea] font-bold">
      {username}
    </p>
  </div>
);

export default UserInformationSection;
