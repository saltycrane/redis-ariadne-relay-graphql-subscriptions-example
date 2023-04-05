import dynamic from "next/dynamic";

const ClientOnlyIndexPage = dynamic(() => import("../IndexPage"), {
  ssr: false,
});

export default ClientOnlyIndexPage;
