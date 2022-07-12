import axios from 'axios';
import { Request } from 'express';
import { IBundleWidget } from './response/IBundleWidget';
import { getRequestConfig } from './requestConfig';

export const listBundlesWidgets = async (req: Request): Promise<IBundleWidget[]> => {

  const res = await axios.get(`${process.env.ENTANDO_COMPONENT_MANAGER_API_URL}/bundles/all/widgets?filters[0].value=app-builder&filters[0].attribute=widgetType&filters[0].operator=eq`,
    getRequestConfig(req)
  );

  return res.data.payload;
};
