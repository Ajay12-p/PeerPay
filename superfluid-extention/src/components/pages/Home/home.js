import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.modules.css";
import NFT from "../../NFT/NFT";
import Coin from "../../Coin/Coin";
import History from "../../History/History";
import {
  Tabs,
  TabList,
  TabPanels,
  Button,
  Box,
  TabPanel,
  useTab,
  useMultiStyleConfig,
} from "@chakra-ui/react";
const Home = () => {
  const address = localStorage.getItem("user");
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? "😎" : "😐"}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  return (
    <div>
      <div className="flowRate">address = {address}</div>

      <div className="userData">
        here all the detail of your account is going to show
      </div>

      <div className="tabis">
        <Tabs>
          <TabList>
            <CustomTab>Coin</CustomTab>
            <CustomTab>History</CustomTab>
            <CustomTab>NFT</CustomTab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Coin />
            </TabPanel>

            <TabPanel>
              <History />
            </TabPanel>
            <TabPanel>
              <NFT />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
