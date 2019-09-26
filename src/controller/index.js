import reports from "../model/reports";
const viewData = {
  title: "Report manager",
  reports
};
/**
 * Houses the controller methods
 */
export default class IndexController {
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static allReports(req, res) {
    res.render("main", viewData);
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static updateReport(req, res) {
    const { reportId } = req.params;
    const { ticketState } = req.body;
    const state = (reports.find(
      report => report.id === reportId
    ).state = ticketState);
    res.status(200).json({ state });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static blockReport(req, res) {
    const { reportId } = req.params;
    const blocked = (reports.find(
      report => report.id === reportId
    ).blocked = true);
    res.status(200).json({ blocked });
  }
}
