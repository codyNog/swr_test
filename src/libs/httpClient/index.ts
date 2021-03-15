import api from "~/api/$api";
import aspida from "@aspida/axios";

export const httpClient = api(aspida());
