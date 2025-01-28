import { customerReviews } from "@/constants";
import Paragraph from "../ui/paragraph";
import Title from "../ui/title";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SubTitle from "../ui/subtitle";

const CustomerReview = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #171924 0%, rgba(23, 25, 36, 0) 100%)",
      }}
      className="py-20"
    >
      <div style={{ width: "1300px" }} className="mx-auto">
        <div className="flex flex-col items-center justify-center gap-5">
          <Title text="What our customers say" fontSize="2xl" />
          <Paragraph
            text="Read why thousands of marketers, writers, and entrepreneurs love us so much."
            width="30%"
            textAlign="center"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
          {customerReviews.map((review) => (
            <div
              className="bg-white p-5 rounded-md flex flex-col gap-5 h-cover"
              key={review.id}
            >
              <div className="flex items-center justify-start gap-5">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div className="flex flex-col gap-1">
                  <Title text={review.name} fontSize="base" color="#12141D" />
                  <SubTitle text={review.email} fontSize="xs" color="#12141D" />
                </div>
              </div>
              <div>
                <Paragraph text={review.comment} color="#12141D" />
                <a className="text-blue-400">{review.about}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CustomerReview;
