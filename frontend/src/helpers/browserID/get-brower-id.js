import FingerprintJS from "@fingerprintjs/fingerprintjs";
export async function getBrowserID() {
  const fpPromise = FingerprintJS.load();
  try {
    const fp = await fpPromise;
    const result = await fp.get();

    // This is the visitor identifier:
    const visitorId = result.visitorId;
    console.log(visitorId);
    return visitorId;
  } catch (error) {
    console.log(error);
  }
}
