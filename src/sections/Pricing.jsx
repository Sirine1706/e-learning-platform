import { PlanCard } from "../components";
import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";

const Pricing = () => {
  return (
    <section id="pricing">
      <motion.div
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "0px 0px -200px 0px", once: true }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-y-4">
          <h2 className="relative section-title-after text-h2 text-gray-10 text-center">
            Explore Our Offers
          </h2>
          <p className="text-base font-medium text-gray-60 text-center">
            Choose the right pricing for you and start your journey with us
          </p>
        </div>
        <div className="flex flex-col gap-8 p-10 xl:flex-row">
          <PlanCard
            color="#78E3FC"
            name="Basic"
            price="Free"
            description="Get started with the basic plan"
            features={[
              "Access to free courses.",
              "Basic plan",
              "Medium Quality videos",
            ]}
            btnText="Start Free Plan"
          />
          <PlanCard
            color="#c0c0c0"
            name="Silver"
            price="220$"
            description="Get started with the silver plan"
            features={[
              "Access to limited courses.",
              "Silver plan",
              "High Quality videos",
            ]}
            btnText="Start Silver Plan"
          />
          <PlanCard
            color="#FFDF00"
            name="Gold"
            price="510$"
            description="Get started with the gold plan"
            features={[
              "Access to all courses.",
              "Gold plan",
              "High Quality videos",
            ]}
            btnText="Start Gold Plan"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
