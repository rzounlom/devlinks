import { FC } from "react";

interface LinksMainProps {}

const LinksMain: FC<LinksMainProps> = ({}) => {
  return (
    <div className="bg-white p-[24px] mt-[16px]">
      <div>
        <h1 className="text-[24px] font-bold h-[36px]">Customize your links</h1>
        <p className="h-[48px] mt-[8px] text-[#737373]">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <button
        type="button"
        className="h-[46px] w-full mt-[40px] rounded-md border-1 border-[#633CFF] text-[#633CFF] font-semibold"
      >
        + Add new link
      </button>
    </div>
  );
};

export default LinksMain;
