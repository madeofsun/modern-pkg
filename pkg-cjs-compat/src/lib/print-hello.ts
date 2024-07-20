export default function printHello(name: string) {
  if (typeof window === "undefined") {
    console.log(`Hello ${name} from ${__dirname}`);
  } else {
    console.log(`Hello ${name} from ${window.location}`);
  }
}
