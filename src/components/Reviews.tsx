"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Carlos Ribeiro",
    job: "Chef",
    review:
      "Victor foi extremamente atencioso e entregou resultados excepcionais. Sua atenção aos detalhes fez toda a diferença no projeto.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Sophia Martins",
    job: "Designer de Interiores",
    review:
      "O trabalho de Victor é impecável! Ele superou minhas expectativas e entregou tudo antes do prazo com perfeição.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Michael Carter",
    job: "Software Developer",
    review:
      "Victor brought innovative solutions and always went the extra mile. His coding skills are sharp, and he’s great to collaborate with.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Laura Pereira",
    job: "Psicóloga",
    review:
      "A experiência de trabalhar com Victor foi incrível. Ele é muito competente e sempre se preocupa em oferecer o melhor resultado.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Lucas Fernandes",
    job: "Engenheiro Civil",
    review:
      "A expertise técnica de Victor e sua habilidade de resolver problemas são de alto nível. Mal posso esperar para trabalhar com ele novamente!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "David Johnson",
    job: "Filmmaker",
    review:
      "Extremely professional and dedicated! Victor really cares about the quality of the work he delivers. Highly recommend!",
  },
];


const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        alt="person_picture_review"
                        width={70}
                        height={70}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
