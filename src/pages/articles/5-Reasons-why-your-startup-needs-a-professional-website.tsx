import React from "react";
import { Helmet } from "react-helmet";
import "../Articles.scss";

import image from "../../../assets/images/articles/5-reasons-why-you-need-a-website-img.png";

function CurrentArticle({ title }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="No matter how small or big your business may be, a well designed website will guarantee your access to more consumers in need of your unique product or service. Therefore, it is of utmost importance that you have a website that is professional and comprehensive, potraying the most compelling parts of your business."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://skyblazar.com/articles/5-reasons-why-you-need-a-website"
        />
        <meta
          property="og:description"
          content="No matter how small or big your business may be, a well designed website will guarantee your access to more
          consumers in need of your unique product or service. Therefore, it is of utmost importance that you have a
          website that is professional and comprehensive, potraying the most compelling parts of your business."
        />
        <meta
          property="og:image"
          content="https://skyblazar.com/images/5-reasons-why-you-need-a-website-img.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="5 Reasons why your startup/business needs a professional website"
        />
      </Helmet>
      <p>
        The internet has proven over time to be the most lucrative platform for
        businesses of all categories to thrive. Billionaires like Jeff Bezos and
        Elon Musk built businesses around the internet and have reaped massive
        success as a result.
      </p>

      <div className="img">
        <img
          src={image}
          alt="5 Reasons why your startup needs a professional website"
        />
      </div>

      <p>
        No matter how small or big your business may be, a well designed website
        will guarantee your access to more consumers in need of your unique
        product or service. Therefore, it is of utmost importance that you have
        a website that is professional and comprehensive, potraying the most
        compelling parts of your business. You must not compromise quality or
        functionality when building one
      </p>

      <h2>Access to more customers</h2>
      <p>
        The internet has over 2.4 billion visitors every day and 81% of them
        perform online research before making a purchase. If your business does
        not have a good online presence, you're missing out on a huge number of
        potential customers. With a website optimized for search engines like
        Google and Bing, your business will get more visiblity which will
        translate to much more business leads and clients.
      </p>

      <h2>Constant Availability - No more "Closed for Business"</h2>
      <p>
        A well designed website allows your business to be open 24/7. Customers
        can stop by at any time to get detailed information about your business,
        make purchasing decisions or interact with embedded chatbots to get more
        details about what they need. An online store in your website will
        drastically boost sales as it gives your access to customers beyond your
        region of operation and timezone. <br />
        With chatbots, you have a sales representative or customer support
        personnel who is always available to interact with your potential
        customers and point them in the right direction.
      </p>

      <h2>Most customers expect it</h2>
      <p>
        We a living in the information age and people now prefer going to the
        internet to get relevant and accurate information over personal
        interaction. Recent studies have shown that 60% of consumers expect
        companies to have professional websites for reference and credibility.{" "}
        <br />
        Customers may need detailed information about your product or service
        and the way your website presents such information will create an
        impression about how refined and credible your business is. Most
        customers will quickly look elsewhere if you don't have a website that
        portrays your business in the most professional and compelling way.
      </p>

      <h2>Easy customer referral and recommendation</h2>
      <p>
        You may not have the time or even the capacity to communicate all the
        intricate parts of your business to an inquisitive high value customer,
        but you can always refer them to your website to get more detailed
        information about what they need. <br />
        Most customers are already looking online get other peoples
        recommendation about a particular brand or product, so including client
        testimonials on your website can dramatically boost the confidence of
        potential customers in your business.
      </p>

      <h2>Your competition already has one</h2>
      <p>
        Most businesses are fast awakening to the benefits of having a well
        designed professional website. The earlier you get yours ready, the
        quicker you improve your ranking on various search engines like Google
        and Bing. If your company's website shows up as the first result on
        Google when users search for a product or service you offer, that will
        dramatically boost your sales and cement your position as the top while
        your competitions fight to catch up.
      </p>

      <p className="summary">
        A lot of startup owners are sceptical about approaching professional
        website designers because they expect an excessive price tag and do not
        fully comprehend the positive impact a professional website can have in
        boosting their business. Skyblazar creates affordable and professional
        websites with no compromise on quality and functionality.
      </p>
    </React.Fragment>
  );
}

export default CurrentArticle;
