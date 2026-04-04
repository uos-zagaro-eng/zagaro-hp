import { Helmet } from "react-helmet-async";
import { absolutePublicUrl, SEO } from "../constants/seo";

type SeoProps = {
  title: string;
  description?: string;
  /** ルートパス（先頭スラッシュなし）。例: curriculum */
  path?: string;
};

const Seo = ({ title, description = SEO.DEFAULT_DESCRIPTION, path = "" }: SeoProps) => {
  const pageTitle = title.includes("ZAGARO") ? title : `${title} | ZAGARO`;
  const url = absolutePublicUrl(path);
  const imageUrl = absolutePublicUrl("b_logo.png");

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ZAGARO" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={SEO.OG_IMAGE_ALT} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO.TWITTER_SITE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Seo;
