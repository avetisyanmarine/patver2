import { useState } from "react";

const AttendanceGuests = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    familySide: null,
    attending: null,
    guestCount: null,
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guestCount" ? Math.max(0, parseInt(value) || 0) : value,
    }));
  };

  const handleAttendingChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
    }));
  };

  const handleFamilySideChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      familySide: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({ type: "", text: "" });

    if (!formData.fullName.trim()) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել ձեր ամբողջական անունն ու ազգանունը։",
      });
      return;
    }

    if (formData.familySide === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ ո՞ր կողմից եք։",
      });
      return;
    }

    if (formData.attending === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ արդյոք մասնակցում եք։",
      });
      return;
    }

    if (formData.attending && formData.guestCount == 0) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք մուտքագրել հյուրերի քանակը։",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwZHZ3OuSyxg_X4FIGdvVLoAZ-xZhn0t5v0Jss8LTYPMptolJto1m7q6vtFP3qlA-zd/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            fullName: formData.fullName,
            familySide: formData.familySide,
            attending: formData.attending,
            guestCount: formData.attending ? formData.guestCount : 0,
            comment: formData.comment || "",
          }).toString(),
        },
      );

      setMessage({
        type: "success",
        text: "Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։",
      });

      setMessage({
        type: "success",
        text: "Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։",
      });
      setFormData({
        fullName: "",
        familySide: null,
        attending: null,
        guestCount: null,
        comment: "",
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error("Սխալ:", err);
      setMessage({
        type: "error",
        text: "Տեղի է ունեցել սխալ, խնդրում ենք փորձել կրկին:",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-10 mx-auto w-full max-w-3xl box-border overflow-hidden backdrop-blur-md rounded-2xl shadow-xl border-2 border-white/30 p-6 sm:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h3>Հրավերի պատասխան</h3>
        <p className="text-gray-400 mt-2">
          Խնդրում ենք նախապես տեղեկացնել Ձեր մասնակցության մասին մինչև հունիսի
          15-ը։
        </p>
      </div>

      {/* Alert Messages  094875372*/}
      {message.text && (
        <div
          className={`mb-5 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl flex items-start gap-3 sm:gap-4 animate-in fade-in slide-in-from-top-2 duration-300 text-sm sm:text-base ${
            message.type === "success"
              ? " from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-800"
              : "from-red-50 to-pink-50 border-l-4 border-red-500 text-red-800"
          }`}
        >
          <span
            className={`text-lg sm:text-2xl font-bold pt-0.5 ${message.type === "success" ? "text-green-500" : "text-red-500"}`}
          >
            {message.type === "success" ? "✓" : "⚠"}
          </span>
          <div className="flex-1">
            <p className="font-semibold">{message.text}</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 sm:space-y-6 md:space-y-7"
      >
        {/* Full Name Input */}
        <div className="group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Անուն, Ազգանուն"
            required
            className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:border-gray-800 focus:ring-4 focus:ring-gray-100 group-hover:border-gray-300"
          />
        </div>

        {/* Family Side */}
        <div className="group">
          <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-3 sm:mb-4">
            <span className="flex items-center gap-2">
              <h4 className="text-lg">Ու՞մ կողմից եք հրավիրված</h4>
            </span>
          </label>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {[
              { value: "Հարսի կողմից", label: "Հարսի կողմից" },
              { value: "Փեսայի կողմից", label: "Փեսայի կողմից" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleFamilySideChange(option.value)}
                className={`relative py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap ${
                  formData.familySide === option.value
                    ? "bg-[#1e1e1e] text-white shadow-lg shadow-gray-500/40 scale-105"
                    : "bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200 hover:border-gray-300 active:scale-95"
                }`}
              >
                <span className="text-base sm:text-lg md:text-xl">
                  {option.icon}
                </span>
                <span className="hidden sm:inline">{option.label}</span>
                <span className="sm:hidden text-xs">
                  {option.label.split(",")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Attending Options */}
        <div className="group">
          <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-3 sm:mb-4">
            <span className="flex items-center gap-2">
              <h4 className="text-lg">Կկարողանա՞ք մասնակցել</h4>
            </span>
          </label>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {[
              { value: true, label: "Այո, կմասնակցեմ", icon: "✓" },
              { value: false, label: "Ոչ, չեմ մասնակցի", icon: "✗" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleAttendingChange(option.value)}
                className={`relative py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap ${
                  formData.attending === option.value
                    ? "bg-[#1e1e1e] text-white shadow-lg shadow-gray-500/30 scale-105"
                    : "bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200 hover:border-gray-300 active:scale-95"
                }`}
              >
                <span className="text-base sm:text-lg md:text-xl">
                  {option.icon}
                </span>
                <span className="hidden sm:inline">{option.label}</span>
                <span className="sm:hidden text-xs">
                  {option.label.split(",")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Guest Count - Conditional */}
        {formData.attending === true && (
          <div className="group animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="relative">
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                placeholder="Հյուրերի քանակ"
                max="20"
                className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:border-gray-800 focus:ring-4 focus:ring-gray-100 group-hover:border-gray-300"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1.5 sm:mt-2">
              Ընդհանուր (ներառյալ դուք)
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 bg-[#1e1e1e] text-white font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl shadow-lg shadow-gray-500/30 transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-600 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-100 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span className="hidden sm:inline">Ուղարկվում է...</span>
              <span className="sm:hidden text-xs">Ուղարկում...</span>
            </>
          ) : (
            <>
              <span className="text-white">Ուղարկել</span>
            </>
          )}
        </button>

        {/* Footer Info */}
        <p className="text-center pt-3 sm:pt-4 border-t border-gray-200">
          Ձեր տվյալները շատ կարևոր են մեզ համար
        </p>
      </form>
    </div>
  );
};

export default AttendanceGuests;
