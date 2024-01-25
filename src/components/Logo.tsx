export default function Logo() {
  return (
    <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[32px] w-[32px] rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Acme Store logo"
        viewBox="0 0 32 28"
        className="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]"
      >
        <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
        <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
      </svg>
    </div>
  );
}
