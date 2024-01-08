import { type FC, useEffect } from "react";
import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { type IArticle } from "~/entities/article/model/article";
import { ArticleIcons } from "~/shared/ui";
import { motion, useAnimation } from "framer-motion";

const Article: FC<{ item: IArticle; index: number }> = ({ item, index }) => {
  const controls = useAnimation();

  const initialState = { opacity: 0.5, scale: 0 };

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delay: index < 10 ? index * 0.02 : 10 * 0.02,
      },
    });
  }, []);

  return (
    <motion.div initial={initialState} animate={controls}>
      <Flex
        key={item.id}
        _hover={{ bgColor: item.color.split(".")[0] + ".400" }}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={item.color}
        borderRadius={"full"}
        cursor={"pointer"}
        transition={"all 0.2s"}
        w={"100%"}
        h={"80px"}
      >
        <Icon as={ArticleIcons[item.icon]} w={8} h={8} />
        <Tooltip label={item.title}>
          <Text
            maxW={"80%"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
          >
            {item.title}
          </Text>
        </Tooltip>
      </Flex>
    </motion.div>
  );
};

export default Article;