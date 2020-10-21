import { act, renderHook } from "@testing-library/react-hooks";
import { Lookup } from "common/models";
import { useConfirmationDialog } from "./confirmation-dialog.hook";

describe("useConfirmationDialog tests", () => {
  it("should set isOpen to true when opening the dialog and set the expected item to delete", () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const item: Lookup = { id: "1", name: "item" };

    act(() => {
      result.current.onOpenDialog(item);
    });

    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toStrictEqual(item);
  }),
    it("should set isOpen to false when closing the dialog", () => {
      const { result } = renderHook(() => useConfirmationDialog());

      act(() => {
        result.current.onClose();
      });

      expect(result.current.isOpen).toBeFalsy();
    }),
    it("should set the item to delete to an empty object when accepting", () => {
      const { result } = renderHook(() => useConfirmationDialog());
      const item: Lookup = { id: "", name: "" };

      act(() => {
        result.current.onAccept();
      });

      expect(result.current.itemToDelete).toStrictEqual(item);
    });
});
