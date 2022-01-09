import {renderHook} from "@testing-library/react-hooks";
import {descriptionLength} from "./constants";

describe("useDescription", () => {
  const mockDescription =
    "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่!\n\n“เกาะช้าง” จังหวัดตราด ที่เที่ยวทะเลใกล้กรุงเทพฯ สามารถเที่ยวกันได้ทุกฤดู เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว! ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? Wongnai Travel บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค ล่องเรือมาด ชมธรรมชาติป่าชายเลน ขี่ช้างท่องป่า ตื่นเต้นกับการผจญภัยเหนือยอดไม้ ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม นอนหลับ เที่ยวสนุกแน่นอน";
  it(`should use only first ${descriptionLength} characters of the input`, async () => {
    const {default: useDescription} = await import("./useDescription");
    const {result} = renderHook(() => useDescription(mockDescription));

    expect(result.current.join("\n\n").slice(0, -6)).toBe(
      mockDescription.slice(0, descriptionLength)
    );
  });

  it('should append " .... " after last line of the result', async () => {
    const {default: useDescription} = await import("./useDescription");
    const {result} = renderHook(() => useDescription(mockDescription));

    expect(result.current[result.current.length - 1].slice(-6)).toBe(" .... ");
  });

  it("should split description with \\n\\n", async () => {
    const {default: useDescription} = await import("./useDescription");
    const {result} = renderHook(() => useDescription(mockDescription));
    expect(result.current.length).toBe(mockDescription.split("\n\n").length);
  });
});
