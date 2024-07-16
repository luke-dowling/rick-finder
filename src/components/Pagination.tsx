import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  handleButtonClick: (num: string) => void;
  info: {
    prev?: string | null;
    next?: string | null;
  };
}

const Pagination = ({ handleButtonClick, info }: PaginationProps) => {
  return (
    <Box mt={6} alignSelf={"center"}>
      <IconButton
        aria-label="Button for previous page"
        m={4}
        p={4}
        fontSize="20px"
        disabled={info.prev === null}
        onClick={() => {
          if (info.prev) handleButtonClick(info.prev);
        }}
        icon={<FaArrowLeft />}
      />
      <IconButton
        aria-label="Button for next page"
        m={4}
        p={4}
        fontSize="20px"
        disabled={info.next === null}
        onClick={() => {
          if (info.next) handleButtonClick(info.next);
        }}
        icon={<FaArrowRight />}
      />
    </Box>
  );
};

export default Pagination;
