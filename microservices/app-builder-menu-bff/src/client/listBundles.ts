import axios from 'axios';
import { Request } from 'express';
import { IBundle, IBundleWidget } from './response/IBundleWidget';
import { getRequestConfig } from './requestConfig';

export const listBundles = async (req: Request): Promise<IBundle[]> => {
  const url = `${process.env.ENTANDO_ECR_INGRESS_URL}/bundles`;
  try {
    const res = await axios.get(url, getRequestConfig(req));
    return res.data.payload;
  } catch (ex) {
    throw new Error(`Error while calling ${url}: ${(ex as Error).message}`);
  }
};

export const listBundlesWidgets = async (req: Request): Promise<IBundleWidget[]> => {
  const url = `${process.env.ENTANDO_ECR_INGRESS_URL}/bundles/all/widgets?filters[0].value=app-builder&filters[0].attribute=widgetType&filters[0].operator=eq`;
  try {
    const res = await axios.get(url, getRequestConfig(req));
    return res.data.payload;
  } catch (ex) {
    throw new Error(`Error while calling ${url}: ${(ex as Error).message}`);
  }
};
