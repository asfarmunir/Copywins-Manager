"use client";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FiInfo } from "react-icons/fi";

import { ThemeToggle } from "@/components/shared/ToggleTheme";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AiFillFire } from "react-icons/ai";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Verified } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { CgNotes } from "react-icons/cg";
import Link from "next/link";

interface UserData {
  name: string;
  username: string;
  phoneNumber: string;
  interests: string[];
  profilePicture: string;
}

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  // Add more as needed
];

const suggestedAccounts = [
  {
    name: "TradeMaster",
    description: "Expert trading tips and market analysis",
    verified: true,
  },
  {
    name: "SportsGuru",
    description: "Daily sports updates and predictions",
    verified: true,
  },
  {
    name: "MarketMogul",
    description: "Insights on stocks and crypto",
    verified: false,
  },
];

const WelcomeSetup = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    username: "",
    phoneNumber: "",
    interests: [],
    profilePicture: "",
  });
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [followedAccounts, setFollowedAccounts] = useState<string[]>([]);
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setUserData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleFollowToggle = (accountName: string) => {
    setFollowedAccounts((prev) =>
      prev.includes(accountName)
        ? prev.filter((name) => name !== accountName)
        : [...prev, accountName]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_cloudinary_preset"); // Replace with your Cloudinary preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", // Replace with your Cloudinary cloud name
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setUserData((prev) => ({ ...prev, profilePicture: data.secure_url }));
      setAvatarPreview(data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleAvatarSelect = (avatar: string) => {
    setUserData((prev) => ({ ...prev, profilePicture: avatar }));
    setAvatarPreview(avatar);
  };

  const handleNext = () => {
    if (step === 5 && !termsAccepted) return;
    if (step < 7) setStep(step + 1);
    if (step === 7) {
      // Handle final submission
      console.log("User Data:", userData);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col w-full  items-start justify-center max-w-4xl">
            <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
              What’s your name?
            </h2>
            <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              This is how others will see you on CopyWins
            </p>
            <div className="w-full mt-6">
              <Label
                htmlFor="name"
                className="text-[#3E4347] font-semibold dark:text-white/80 text-[0.8rem] leading-loose 2xl:text-[0.9rem]"
              >
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={userData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full rounded-[10px] shadow border dark:bg-[#071D27] border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] bg-[#F5F5F5] px-3 py-3 leading-tight text-[#3E4347]"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col w-full  items-start justify-center max-w-4xl">
            <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
              Pick a username
            </h2>
            <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              Pick a username you like. You can change this later.
            </p>
            <div className="w-full mt-6">
              <Label
                htmlFor="username"
                className="text-[#3E4347] font-semibold dark:text-white/80 text-[0.8rem] leading-loose 2xl:text-[0.9rem]"
              >
                Username
              </Label>
              <Input
                id="username"
                placeholder="Clonesignal.com/@Georgeadnerson"
                value={userData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="w-full rounded-[10px] shadow border dark:bg-[#071D27] border-[#001E451A] xl:min-w-[350px] 2xl:min-w-[400px] bg-[#F5F5F5] px-3 py-3 leading-tight text-[#3E4347]"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col w-full  items-start justify-center max-w-4xl">
            <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
              Add your phone
            </h2>
            <p className="text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              This will be used to verify your account and get access to
              features like direct messages.
            </p>
            <div className="w-full mt-6 flex gap-4">
              <div className="w-1/3">
                <Label
                  htmlFor="countryCode"
                  className="text-[#3E4347] font-semibold dark:text-white/80 text-[0.8rem] leading-loose 2xl:text-[0.9rem]"
                >
                  Country Code
                </Label>
                <Select
                  value={selectedCountryCode}
                  onValueChange={setSelectedCountryCode}
                >
                  <SelectTrigger className="rounded-[10px] shadow border dark:bg-[#071D27] border-[#001E451A] bg-[#F5F5F5] px-3 py-3">
                    <SelectValue placeholder="Select code" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((code) => (
                      <SelectItem key={code.code} value={code.code}>
                        {code.code} ({code.country})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-2/3">
                <Label
                  htmlFor="phoneNumber"
                  className="text-[#3E4347] font-semibold dark:text-white/80 text-[0.8rem] leading-loose 2xl:text-[0.9rem]"
                >
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={userData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className="w-full rounded-[10px] shadow border dark:bg-[#071D27] border-[#001E451A] bg-[#F5F5F5] px-3 py-3 leading-tight text-[#3E4347]"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col w-full  items-start justify-center max-w-4xl">
            <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
              What are you interested in?
            </h2>
            <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              Select topics to personalize your CopyWins experience
            </p>
            <div className="w-full mt-6 flex gap-4">
              <div
                className={`flex-1 p-4 rounded-[10px] shadow border cursor-pointer bg-[#F5F5F5] dark:bg-[#071D27] border-[#001E451A]`}
                onClick={() => handleInterestToggle("Trading")}
              >
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src="/trading.svg"
                    alt="Trading"
                    width={44}
                    height={44}
                    className=""
                  />
                  <p className=" inline-flex items-center text-xs rounded-full xl:text-sm gap-1 bg-[#FF6723] text-white px-4 py-2">
                    <AiFillFire size={20} />
                    Recent win 2 mins ago.
                  </p>
                </div>
                <h3 className="font-semibold text-lg ">Trading</h3>
                <p className="text-[0.9rem]">
                  Follow market trends and trading strategies
                </p>
                <div className="flex items-center justify-between mt-4 ">
                  <div className="flex items-center gap-1 ">
                    <p className="bg-green-200 text-xs font-semibold  rounded-full border border-green-300 px-2 py-1.5 text-green-600">
                      84%
                    </p>
                    <p className="text-[0.8rem] text-[#3E4347] dark:text-white/80">
                      Win rate
                    </p>
                  </div>
                  <Checkbox
                    checked={userData.interests.includes("Trading")}
                    onCheckedChange={() => handleInterestToggle("Trading")}
                    className=" text-primary border-gray-300 rounded-full focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div
                className={`flex-1 p-4 rounded-[10px] shadow border cursor-pointer bg-[#F5F5F5] dark:bg-[#071D27] border-[#001E451A]`}
                onClick={() => handleInterestToggle("Sports")}
              >
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src="/sports.svg"
                    alt="sports"
                    width={44}
                    height={44}
                    className=""
                  />
                  <p className=" inline-flex items-center text-xs rounded-full xl:text-sm gap-1 bg-[#FF6723] text-white px-4 py-2">
                    <AiFillFire size={20} />
                    Recent win 2 mins ago.
                  </p>
                </div>
                <h3 className="font-semibold text-lg ">Sports</h3>
                <p className="text-[0.9rem]">
                  Copy betting strategies from top sports analysts
                </p>
                <div className="flex items-center justify-between mt-4 ">
                  <div className="flex items-center gap-1 ">
                    <p className="bg-green-200 text-xs font-semibold  rounded-full border border-green-300 px-2 py-1.5 text-green-600">
                      84%
                    </p>
                    <p className="text-[0.8rem] text-[#3E4347] dark:text-white/80">
                      Win rate
                    </p>
                  </div>
                  <Checkbox
                    checked={userData.interests.includes("Sports")}
                    onCheckedChange={() => handleInterestToggle("Sports")}
                    className=" text-primary border-gray-300 rounded-full focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col w-full  items-start justify-center max-w-4xl">
            <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
              Terms and Conditions
            </h2>
            <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              Please review and accept our terms to continue
            </p>
            <div className="w-full mt-6">
              <Dialog open={!termsAccepted && step === 5}>
                <DialogTrigger asChild>
                  <div className="flex w-full justify-center">
                    <Button
                      variant="outline"
                      className="rounded-[10px] inline-flex items-center gap-2"
                    >
                      <CgNotes />
                      View Terms and Conditions
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] p-5 2xl:p-6 xl:max-w-[700px] max-h-[95svh] bg-[#F5F5F5] dark:bg-[#071D27] rounded-[10px]">
                  <DialogHeader>
                    <DialogTitle>Terms and Conditions</DialogTitle>
                    <DialogDescription>
                      Please read our terms and conditions carefully before
                      using our service.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 overflow-y-auto max-h-[60svh]">
                    <div>
                      <h4 className="font-semibold">User Responsibilities</h4>
                      <p className="text-sm">
                        Users must not engage in any unlawful activities,
                        including but not limited to hacking, phishing, or
                        distributing malware.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Prohibited Conduct</h4>
                      <p className="text-sm">
                        All content provided by the service, including text,
                        images, and logos, are the property of the company and
                        may not be used without permission.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Intellectual Property</h4>
                      <p className="text-sm">
                        Users must not engage in any unlawful activities,
                        including but not limited to hacking, phishing, or
                        distributing malware.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Termination</h4>
                      <p className="text-sm">
                        Users are responsible for maintaining the
                        confidentiality of their account information and for all
                        activities that occur under their account.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Limitation of Liability</h4>
                      <p className="text-sm">
                        All content provided by the service, including text,
                        images, and logos, are the property of the company and
                        may not be used without permission.
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setTermsAccepted(true)}
                    className="rounded-full bg-primary py-3"
                    disabled={termsAccepted}
                  >
                    {termsAccepted ? "Accepted" : "Accept Terms"}
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col w-full  items-start justify-center max-w-4xl">
            <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
              Follow suggested accounts
            </h2>
            <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              Discover top-performing traders to follow and Copy their
              strategies
            </p>
            <div className="w-full mt-6 space-y-4">
              {suggestedAccounts.map((account) => (
                <div
                  key={account.name}
                  className="flex items-center justify-between p-4 rounded-[14px] shadow border bg-[#F5F5F5] dark:bg-[#071D27] border-[#001E451A]"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold 2xl:text-lg">
                          {account.name}
                        </h3>
                        {account.verified && (
                          <Verified className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <p className="text-[0.8rem] xl:text-sm text-[#3E4347] dark:text-white/80">
                        {account.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleFollowToggle(account.name)}
                    className={`rounded-[10px] px-6 ${
                      followedAccounts.includes(account.name)
                        ? "bg-gray-200 text-gray-800"
                        : "text-primary bg-[#2355F61A] "
                    }`}
                  >
                    {followedAccounts.includes(account.name)
                      ? "Following"
                      : "Follow"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col w-full  items-start justify-center max-w-4xl">
            <h2 className="text-xl font-bold text-vintage-50 xl:text-2xl">
              Set your profile picture
            </h2>
            <p className="max-w-md text-[0.8rem] font-light leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem]">
              Upload a photo or choose an avatar
            </p>
            <div className="w-full mt-6 bg-white dark:bg-[#071D27] p-4 rounded-[14px]">
              <div
                className=" w-full h-[142px] rounded-[14px]"
                style={{
                  backgroundImage: `url("/cover-bg.svg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              ></div>
              <div className="w-28 mx-auto   h-28 bg-primary border-2 border-white flex items-center justify-center rounded-full -mt-16"></div>
              <div className=" relative flex items-center justify-center mt-4">
                <Input
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-fit opacity-0 cursor-pointer absolute mx-auto rounded-[10px] shadow border dark:bg-[#071D27] border-[#001E451A] bg-[#F5F5F5] px-3 py-3"
                />
                <p
                  className="
                bg-card-foreground
                w-fit mx-auto text-[0.8rem]      leading-loose text-[#3E4347] dark:text-white/80 2xl:text-[0.9rem] cursor-pointer px-6 font-semibold py-2 rounded-[10px] 
                
                "
                >
                  Upload Image
                </p>
              </div>
              {/* {avatarPreview && (
                <Image
                  src={avatarPreview}
                  alt="Preview"
                  width={100}
                  height={100}
                  className="mt-4 rounded-full"
                />
              )} */}
              <div className="mt-6">
                <h3 className="text-[#3E4347] font-bold dark:text-white/80 text-lg 2xl:text-xl leading-loose 2xl:text-[0.9rem]">
                  CopyWins avatars
                </h3>
                <h3 className="text-[#3E4347] dark:text-white/80 text-[0.8rem] leading-loose 2xl:text-[0.9rem]">
                  Choose from our signature avatars featuring our mascot pablo.
                </h3>
                <div className="flex items-center justify-evenly  gap-3 mt-4">
                  {Array.from(
                    { length: 8 },
                    (_, i) => `/avatar${i + 1}.svg`
                  ).map((avatar) => (
                    <Image
                      key={avatar}
                      src={avatar}
                      alt={`Avatar ${avatar}`}
                      width={80}
                      height={80}
                      className={`rounded-full cursor-pointer ${
                        userData.profilePicture === avatar
                          ? "border-4 border-primary"
                          : ""
                      }`}
                      onClick={() => handleAvatarSelect(avatar)}
                    />
                  ))}
                </div>
              </div>
              <div className=" mt-5 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-[10px] p-4">
                <h3 className=" font-normal flex items-center gap-1">
                  <FiInfo size={20} />
                  Profile Activity
                </h3>
                <p className="text-sm mt-2  ">
                  Your profile will remain private and posting access restricted
                  until you complete the registration process to become a
                  verified signal provider on CopyWins. - Note being a signal
                  provider is optional.
                </p>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex  w-full relative  items-center justify-center max-w-4xl">
            <Image
              src="/all-set.svg"
              alt="Success"
              width={400}
              height={400}
              className="dark:hidden"
            />
            <Image
              src="/all-set-dark.svg"
              alt="Success"
              width={440}
              height={440}
              className="dark:block hidden"
            />
            <Link href="/" className=" absolute bottom-7 w-32 opacity-0">
              dashboard
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex min-h-svh relative w-full items-center xl:items-start justify-center gap-2 overflow-hidden p-4 md:p-6 bg-card
         dark:bg-gradient-to-b dark:from-[#04131D] dark:to-[#04131D]"
    >
      <Image
        src="/bg-dots.svg"
        alt="Background"
        fill
        className="object-cover hidden dark:block opacity-30 object-center"
        priority
      />
      <Image
        src="/mobile-top-bg.svg"
        alt="Background"
        width={300}
        height={300}
        className="object-contain w-full dark:hidden    absolute top-0  object-top"
        priority
      />
      <Link href={"/"} className="">
        <Image
          src="/logo-dark.png"
          alt="Background"
          className="absolute top-4 left-4 dark:hidden"
          width={120}
          height={120}
        />
        <Image
          src="/logo-light.png"
          alt="Background"
          className="absolute top-4 left-4 hidden dark:block"
          width={120}
          height={120}
        />
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none bottom-4">
        <ThemeToggle />
      </div>
      <div className="flex overflow-y-auto  flex-col z-10 w-full xl:mt-32  items-start justify-center max-w-4xl">
        {renderStep()}
        <div className="flex justify-end gap-2 w-full mt-6">
          {step > 1 && step < 8 && (
            <Button
              variant="outline"
              className="rounded-full xl:px-10  "
              onClick={handleBack}
            >
              Back
            </Button>
          )}
          {step === 6 ? (
            <Button
              variant="outline"
              className="rounded-full px-8"
              onClick={() => setStep(7)}
            >
              Skip
            </Button>
          ) : null}
          {step < 8 && (
            <Button
              onClick={handleNext}
              className="rounded-full bg-primary px-6 xl:px-8 py-3 text-sm text-white font-normal"
              // disabled={
              //   (step === 1 && !userData.name) ||
              //   (step === 2 && !userData.username) ||
              //   (step === 3 && !userData.phoneNumber) ||
              //   (step === 4 && userData.interests.length === 0) ||
              //   (step === 5 && !termsAccepted)
              //   //   (step === 7 && !userData.profilePicture)
              // }
            >
              {step === 8 ? "Finish" : "Continue"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSetup;
