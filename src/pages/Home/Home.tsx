import React, { FC } from "react";
import { Header } from "../../Components/Organisms/Header";
import Phone from "../../assets/images/phone.png";
import Income from "../../assets/images/income.png";
import Girl from "../../assets/images/girl.png";

interface PropsBanks {
  banks: [key: string | string[]] | any;
}

export const Home: FC<PropsBanks> = ({ banks }) => {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center sm:flex-row p-5 mt-12">
        <div className="sm:max-w-lg mr-10">
          <h2 className="text-2xl text-center font-bold">
            list of banks to make your dreams come true
          </h2>
          <p className="text-sm text-center mt-2 mb-5">
            what are you waiting for to start with the best bank?
          </p>
        </div>
        <img src={Girl} alt="girl" className="w-72 h-60" />
      </div>

      <div className="bg-yellow-200 p-7 relative h-72">
        <div className="sm:max-w-lg mr-10 sm:absolute sm:right-16">
          <p className="font-semibold text-xl ">
            with our banks you will save like you never imagined 😨
          </p>
          <p className="text-sm text-center mt-2 mb-5">
            only with our allied banks
          </p>
        </div>
        <img
          src={Income}
          alt="income"
          className="absolute -right-6 sm:left-72"
        />
      </div>

      <div className="flex justify-center mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {banks.map((bank: any, index: number) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center mt-7 w-80 border border-gray-200"
            >
              <div className="p-4">
                <img
                  src={bank.url}
                  alt="icon-bank"
                  className="object-contain h-24 mx-auto"
                />
              </div>
              <div className="flex-grow p-4">
                <h2 className="text-lg font-bold">{bank.bankName}</h2>
                <p className="text-sm mb-2">{bank.description}</p>
                <p className="text-xs font-bold">{bank.age} years</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center sm:flex-row p-5 mt-12">
        <div className="sm:mr-14">
          <h2 className="text-2xl text-center font-bold mt-16">
            download our app and start saving
          </h2>
          <p className="text-sm text-center mt-2 mb-5">
            what are you waiting for to start with the best bank?
          </p>
        </div>
        <img src={Phone} alt="phone" />
      </div>
    </>
  );
};
