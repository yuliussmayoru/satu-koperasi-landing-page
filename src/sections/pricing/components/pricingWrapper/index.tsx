"use client";

import React, { useEffect, useState } from "react";
import { PricingCard, PricingPlan, PricingResponse } from "sections";
import axiosClient from "api/axiosClient";

export function Pricing() {
  const [activePlan, setActivePlan] = useState<keyof PricingResponse["data"]>("monthly");
  const [plans, setPlans] = useState<PricingPlan[]>([]); // Ensure this is declared properly
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricing = async () => {
      setError(null);
      try {
        const response = await axiosClient.get("api/pricing") as PricingResponse;
        //console.log(`ini data pricing raw: ${JSON.stringify(response)}`);

        const pricingData = response.data;
        //console.log(`ini data pricingData : ${pricingData}`);

        const activePlanData = pricingData[activePlan];
        //console.log(`ini isi activePlanData : ${activePlanData}`);

        // Transform API data into flat array using for...in
        const transformedData: PricingPlan[] = [];

        for (const key in activePlanData) {
          if (activePlanData.hasOwnProperty(key)) {
            const value = activePlanData[key];
            const featuresArray = [];

            for (const name in value?.features) {
              if (value.features.hasOwnProperty(name)) {
                featuresArray.push({
                  name,
                  isActive: Boolean(value.features[name]),
                });
              }
            }

            transformedData.push({
              title: key,
              price: value?.price,
              features: featuresArray,
            });
          }
        }

        //console.log(`ini data transformedData ${JSON.stringify(transformedData)}`);

        setPlans(transformedData);
      } catch (err) {
        setError("Failed to fetch pricing data");
        console.error(err);
      }
    };
    fetchPricing();
  }, [activePlan]);

  //console.log(`ini data activePlan ${activePlan}`);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center text-center pb-12" id="pricing-section">
      <div className="flex flex-col gap-8 p-8 justify-center items-center">
        <h2 className="font-bold text-[#007654]">Pricing</h2>
        <p className="text-3xl">
          Dapatkan Pengalaman Koperasi yang Lebih Efisien dengan Paket Layanan Kami
        </p>

        <div className="flex border border-[#007654] w-52 rounded-md">
          <button
            className={`p-2 w-1/2 ${
              activePlan === "monthly"
                ? "bg-[#007654] text-white"
                : "bg-white text-[#007654]"
            } rounded-l-md`}
            onClick={() => setActivePlan("monthly")}
          >
            MONTHLY
          </button>
          <button
            className={`p-2 w-1/2 ${
              activePlan === "annual"
                ? "bg-[#007654] text-white"
                : "bg-white text-[#007654]"
            } rounded-r-md`}
            onClick={() => setActivePlan("annual")}
          >
            ANNUAL
          </button>
        </div>
        <div>
          <p>Save up to 15% with Annual Plan</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div
        id="price-card"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8"
      >
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}
