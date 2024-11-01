import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
export default function BlogCard({ title = null, description = null }) {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title ? title : "Wooden House, Florida"}
          </Typography>
        </div>
        <Typography color="gray">
          {description
            ? description
            : "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."}
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Like">
            <span className="cursor-pointer transition-colors text-2xl ">
              <FaRegHeart className="" /> {/*Heart without Color*/}
              {/* <FcLike /> */}
            </span>
          </Tooltip>
          <Tooltip content="Comment">
            <span className="cursor-pointer transition-colors text-2xl ">
              <FaRegComment />
            </span>
          </Tooltip>
        </div>
        <p>125 likes</p>
      </CardBody>

      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Read Blog
        </Button>
      </CardFooter>
    </Card>
  );
}
