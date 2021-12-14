<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreGhiBanRequest extends FormRequest
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
            'idGB' => 'required|max:10',
            'idKQ' => 'required|max:10',
            'idCT' => 'required|max:10',
            'LoaiBT' => 'required|max:45',
            'ThoiDiem' => 'required|max:11',
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
            'idKQ.required' => 'ID kết quả không được bỏ trống!',
            'idCT.required' => 'ID cầu thủ không được bỏ trống!',
            'LoaiBT.required' => 'Loại bàn thắng không được bỏ trống!',
            'ThoiDiem.required' => 'Thời điểm ghi bàn không được bỏ trống!',
        ];
    }
}
