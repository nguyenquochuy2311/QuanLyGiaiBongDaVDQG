<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreQDBanThangRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'idMG' => 'required|interger',
            'LoaiBT' => 'required|string|max:10',
            'ThoiDiemBatDau' => 'required|integer|between:0,100',
            'ThoiDiemKetThuc' => 'required|integer|between:0,100',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi thêm dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'idMG.required' => 'Mùa giải không được bỏ trống!',
            'LoaiBT.required' => 'Loại bàn thắng không được bỏ trống!',
            'LoaiBT.max' => 'Loại bàn thắng dưới 10 ký tự!',
            'ThoiDiemBatDau.required' => 'Thời điểm bắt đầu không được bỏ trống',
            'ThoiDiemKetThuc.required' => 'Thời điểm kết thúc không được bỏ trống',
            'ThoiDiemBatDau.between' => 'Thời điểm bắt phải nằm trong khoảng 0 đến 100',
            'ThoiDiemKetThuc.between'=> 'Thời điểm kết thúc phải nằm trong khoảng 0 đến 100',
        ];
    }
}