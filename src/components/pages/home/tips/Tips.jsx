import React from "react";
import CardTips from "../../../partial/CardTips";

const Tips = () => {
  return (
    <>
      {/* Tips Section */}
      <section id="tips" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Fishing Tips & Techniques
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn from the experts to improve your fishing skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CardTips
              image={"⏱️"}
              tips={"Best times: 1 hour before/after sunrise/sunset"}
              title={"Time Your Fishing"}
              description={
                "Fish are most active during dawn and dusk. Plan your trips around these times for better results.."
              }
            />
            <CardTips
              image={"👀"}
              tips={"Best times: 1 hour before/after sunrise/sunset"}
              title={"Match the Hatch"}
              description={"Observe insects and baitfish in the area"}
            />
            <CardTips
              image={"🎀"}
              tips={"Practice at home before your trip"}
              title={"Proper Knot Tying"}
              description={
                "Fish are most active during dawn and dusk. Plan your trips around these times for better results.."
              }
            />
            <CardTips
              image={"⛅"}
              tips={"Check forecasts and barometric pressure"}
              title={"Weather Awareness"}
              description={
                "Fish are most active during dawn and dusk. Plan your trips around these times for better results.."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tips;
