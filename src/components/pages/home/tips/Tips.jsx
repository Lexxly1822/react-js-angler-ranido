import React from "react";

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
            {/* Tip 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Time Your Fishing
              </h3>
              <p className="text-gray-600 mb-4">
                Fish are most active during dawn and dusk. Plan your trips
                around these times for better results.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">⏱️</span>
                <span>Best times: 1 hour before/after sunrise/sunset</span>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Match the Hatch
              </h3>
              <p className="text-gray-600 mb-4">
                Use lures and flies that resemble the natural food sources in
                the water you're fishing.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">👀</span>
                <span>Observe insects and baitfish in the area</span>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Proper Knot Tying
              </h3>
              <p className="text-gray-600 mb-4">
                Learn essential fishing knots like the improved clinch knot and
                palomar knot to prevent losing fish.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">🎀</span>
                <span>Practice at home before your trip</span>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Weather Awareness
              </h3>
              <p className="text-gray-600 mb-4">
                Fish behavior changes with weather patterns. Overcast days often
                produce better results than bright sunny days.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">⛅</span>
                <span>Check forecasts and barometric pressure</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tips;
