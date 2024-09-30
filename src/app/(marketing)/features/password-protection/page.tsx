import { MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LinkShorteningPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                    <MagicBadge title="Secure" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Frotify your links with a password
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        Safeguard sensitive information with robust password protection, providing peace of mind and enhanced security.
                    </p>
                    <div className="flex items-center justify-center gap-x-4 mt-8">
                        <Button size="sm" asChild>
                            <Link href="/dashboard">
                                Get started
                            </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                            <Link href="/blog">
                                Learn more
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="w-full flex max-w-4xl py-10 mx-auto">
                    <Image
                        src="/assets/password-protection.svg"
                        alt="Protect your links with a password"
                        width={80}
                        height={80}
                        className="w-full h-auto"
                    />
                </div>
                <div className="py-14">
                    <div className="mx-auto px-4 md:px-8">
                        <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                            Trusted by the best in the industry
                        </h2>
                        <div className="mt-8">
                            <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
                                {COMPANIES.map((company) => (
                                    <li key={company.name}>
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={80}
                                            height={80}
                                            quality={100}
                                            className="w-28 h-auto"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-20">
                <LampContainer className="max-w-2xl mx-auto">
                    <div className="flex flex-col items-center justify-center relative w-full text-center">
                        <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                            Powerup your link strategy
                        </h2>
                        <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                            Take control of your links with advanced features and real-time insights. Simplify your workflow and achieve more.
                        </p>
                        <div className="mt-6">
                            <Button asChild>
                                <Link href="/auth/sign-up" className="flex items-center">
                                    Get started for free
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </LampContainer>
            </MaxWidthWrapper>
        </>
    )
};

export default LinkShorteningPage