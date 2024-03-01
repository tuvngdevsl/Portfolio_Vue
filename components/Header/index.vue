<template>
  <div
    class="min-w-[1092px] border-solid border-1 border-[#fff] h-[52px] gap-[202px] mt-[46px] flex items-center justify-between"
  >
    <!-- Logo -->
    <div class="flex gap-3 w-[118px]">
      <div>
        <img src="/assets/logo.svg" alt="logo" class="w-[39px] h-[30px]" />
      </div>
      <div class="text-white text-[22px] leading-[36px] font-normal">Vu Tu</div>
    </div>
    <!-- Menu -->
    <div
      class="w-[420px] h-12 flex justify-center items-center rounded-[290px] border-solid border-[1.5px] border-[#7A87FB] py-[6px] pr-8 pl-[6px] gap-10 bg-[#1c1c1c]"
    >
      <div class="w-[52px] h-9 rounded-[40px] px-4 py-2 gap-[6px] bg-[#292929]">
        <img src="/assets/Home_icon.png" alt="home" class="w-5 h-5" />
      </div>
      <h1
        class="text-[#FFF] text-center text-[14px] font-normal leading-normal"
      >
        <NuxtLink to="#about"> About </NuxtLink>
      </h1>
      <h1
        class="text-[#FFF] text-center text-[14px] font-normal leading-normal"
      >
        <NuxtLink to="#project"> Projects </NuxtLink>
      </h1>
      <h1
        class="text-[#FFF] text-center text-[14px] font-normal leading-normal"
      >
        <NuxtLink to="#contact"> Contact me </NuxtLink>
      </h1>
    </div>
    <!-- Login/Signup -->
    <div class="w-[152px] h-[52px]">
      <div class="inline-flex items-start">
        <div
          class="flex py-[14px] px-5 justify-center items-center rounded-[40px] border-solid border-[1px] border-[#7A87FB] bg-gradient-to-r from-blue-500 to-yellow-200"
        >
          <span
            class="text-black text-center text-[14px] font-medium leading-normal"
          >
            Hire me</span
          >
        </div>
        <div
          class="w-[49px] h-[49px] flex justify-center items-center rounded-[40px] border-solid border-[1px] border-[#7A87FB] bg-gradient-to-r from-blue-500 to-yellow-200"
        >
          <img
            src="/assets/User.png"
            alt="user"
            class="w-5 h-5 flex-shirnk-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
