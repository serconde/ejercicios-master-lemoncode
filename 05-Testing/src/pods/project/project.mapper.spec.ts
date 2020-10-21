import * as viewModel from "pods/project/project.vm";
import * as apiModel from "pods/project/api/project.api-model";
import * as mapper from "./project.mapper";

describe("Project mapper tests", () => {
  it("should return the expected view model when passing an api model", () => {
    const projectApiModel: apiModel.Project = {
      id: "10",
      name: "Teh Project",
      isActive: true,
      comments: "A bunch of comments",
      externalId: "20",
      employees: [
        { id: "1", employeeName: "First employee", isAssigned: false },
        { id: "2", employeeName: "Second employee", isAssigned: true },
        { id: "3", employeeName: "Third employee", isAssigned: false }
      ]
    };

    const expectedViewModel: viewModel.Project = {
      id: "10",
      name: "Teh Project",
      isActive: true,
      comments: "A bunch of comments",
      externalId: "20",
      employees: [
        { id: "1", employeeName: "First employee", isAssigned: false },
        { id: "2", employeeName: "Second employee", isAssigned: true },
        { id: "3", employeeName: "Third employee", isAssigned: false }
      ]
    };

    const result = mapper.mapProjectFromApiToVm(projectApiModel);

    expect(result).toStrictEqual(expectedViewModel);
  }),
    it("should return an empty view model when passing a falsey parameter", () => {
      const expectedViewModel = {
        id: "",
        name: "",
        externalId: "",
        comments: "",
        isActive: false,
        employees: []
      };

      const createEmptyProject = jest
        .spyOn(viewModel, "createEmptyProject")
        .mockReturnValue({
          id: "",
          name: "",
          externalId: "",
          comments: "",
          isActive: false,
          employees: []
        });

      const result = mapper.mapProjectFromApiToVm(null);

      expect(result).toStrictEqual(expectedViewModel);
      expect(createEmptyProject).toHaveBeenCalled();
    });
});
